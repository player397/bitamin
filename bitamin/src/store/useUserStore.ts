import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { fetchUserInfo } from 'api/userAPI'
import { User } from 'ts/userType'

interface UserState {
  user: User | null
  loading: boolean
  error: string | null
  fetchUser: () => Promise<void>
  setUserImage: (image: File) => void
  updateProfileUrl: (url: string) => void
}

const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      loading: false,
      error: null,

      fetchUser: async () => {
        set({ loading: true, error: null })
        try {
          const userData = await fetchUserInfo()
          console.log('Fetched User Info in Store:', userData) // 유저 정보 로그 확인
          set({ user: userData, loading: false })
        } catch (error) {
          console.error('Failed to fetch user information:', error)
          set({ error: 'Failed to fetch user information', loading: false })
        }
      },

      setUserImage: (image: File) => {
        set((state) => ({
          user: state.user ? { ...state.user, image } : null,
        }))
      },

      updateProfileUrl: (url: string) => {
        set((state) => ({
          user: state.user ? { ...state.user, profileUrl: url } : null,
        }))
      },
    }),
    {
      name: 'user-storage',
    }
  )
)

export default useUserStore
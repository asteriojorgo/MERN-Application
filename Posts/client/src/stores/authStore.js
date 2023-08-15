import { create } from 'zustand'
import axios from 'axios';

const authStore = create((set) => ({
    loginForm: {
        email: "",
        password: "",
    },

    signupForm: {
        email: "",
        password: "",
    },

    loggedIn: null,

    updateLoginForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value
                }
            }
        })
    },

    updateSignupForm: (e) => {
        const { name, value } = e.target;

        set((state) => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value
                }
            }
        })
    },

    login: async () => {
        const { loginForm } = authStore.getState();
        try {
            const res = await axios.post("/login", loginForm, );
            console.log(res);
            set({ loggedIn: true, loginForm: {
                email: '',
                password: ''
            } })
        } catch (error) {
            console.error("An error occurred:", error.response ? error.response.data : error.message);
            // Handle the error gracefully, e.g., show a message to the user
        }
    },

    signup: async () => {
        const { signupForm } = authStore.getState();
        try {
            const res = await axios.post('/signup', signupForm, )
            console.log(res);

            set({
                signupForm: {
                    email: '',
                    password: ''
                }
            });
        } catch(err) {
            console.log(err)
        }

        console.log('signup')
    },

    checkAuth: async () => {
        try {
            await axios.get('/testroute', );
            set({ loggedIn: true })

        } catch (err) {
            set({ loggedIn: false })
        }
    },

    logout: async () => {
        await axios.get('/logout', )
        set({ loggedIn: false })
    }

}));

export default authStore;
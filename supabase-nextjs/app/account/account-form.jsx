'use client'
import './style.css';

import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'

export default function AccountForm({ user }) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      const { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <body class="align">
    <div className="form-widget">
        <form href="https://httpbin.org/post" method="POST" className="form login" action="javascript:login_user()">
            <div className="form__field">
                <label htmlFor="email" className="hidden">Email</label>
                <input autocomplete="email" id="email" type="text" className="form__input" value={` ${user?.email}`} disabled />
            </div>
            <div className="form__field">
                <label htmlFor="fullName" className="hidden">Full Name</label>
                <input autocomplete="fullName" id="fullName" type="text" className="form__input" value={fullname || ''} onChange={(e) => setFullname(e.target.value)}/>
            </div>
            <div className="form__field">
                <label htmlFor="username" className="hidden">Username</label>
                <input autocomplete="username" id="username" type="text" className="form__input" value={username || ''} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className="form__field">
        <div>
                <p>
                        <br /> 

                <button onClick={() => {
                    updateProfile({ fullname, username, website, avatar_url });
                    window.location.href='/';
                }}    
                disabled={loading} className="button">
                {loading ? 'Loading ...' : 'Sign Up'}
                <svg className="icon"><use xlinkHref="#icon-arrow-right"></use></svg>
                
                </button>
                </p>
        </div>
        </div>
        </form>
        <div>
        <form action="/auth/signout" method="post">
            <button className="link-button" type="submit">
                Return to Home
                <svg className="icon">
                    <use xlinkHref="#icon-arrow-right"></use>
                </svg>
            </button>
        </form>
            <p>Don't want to sign up? <a href="/guest">Continue as Guest</a> <svg className="icon"><use xlinkHref="#icon-arrow-right"></use></svg></p>
        </div>
        </div>
    </body>
  )
}
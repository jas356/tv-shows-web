import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Signup({setUser}) {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const navigate = useNavigate()

const handleSignup = (e) => {
e.preventDefault()

fetch('https://tv-shows-api-jch.web.app/signup', {
    method: "POST",
    headers: {"Content-type" : "application/json"},
    body: JSON.stringify({email, password})
} ) 
.then(resp => resp.json())
.then( data => {
    if(data.message) {
        alert(data.message)
        return
    }
    setUser(data)
    navigate("/")
})
.catch(alert)
}

    return(
        <>
          <h2>Signup</h2>  
          <form onSubmit={handleSignup}>
            <label htmlFor="email"> Email
                <input
                type="email"
                value={email}
                onChange={(e) => {setEmail(e.target.value)} } />
            </label>

            <br />

            <label htmlFor="password"> Password
                <input
                type="password"
                value={password}
                onChange={(e) => {setPassword(e.target.value)}} />
            </label>
 
            <br />

            <input type="submit" value="Sign Up" />
          </form>
        </>
    )
}
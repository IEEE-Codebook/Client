import React,{useState} from 'react'

const SignIn  = ()=>{

    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    
    const uploadFields = ()=>{

        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
           console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    }

   return (
      <div >
          <div >
            <h2>CodeBook</h2>
            <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e)=>setPasword(e.target.value)}
            />
            
            <button onClick={()=>uploadFields()}>
                SignUp
            </button>
            <h5>
                <a href="/signin">Already have an account ?</a>
            </h5>

        </div>
      </div>
   )
}


export default SignIn
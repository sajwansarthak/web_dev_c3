import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ServerDescription } from 'mongodb'
import { PostComponent } from './post'

function App() {
//post column
const [posts,setposts] = useState([])

const PostComponents = posts.map(post=> <PostComponent
  name ={post.name}
  subtitle ={post.subtitle}
  time={post.time}
  image={post.image}
  description={post.description}
/>)

function addpost(){
  setposts([...posts,{
    name:"sarthak",
    subtitle:"1000 followers",
    time:"2m ago",
    image:"",
    description:"hey ya"
  }])
}

  return (
    //post component
    <div style={{background: "#dfe6e9",height:"100vh"}}>
      <button onClick={addpost}>Add Post</button>
      <div style={{display:"flex", justifyContent:"center"}}>
        <div>
          {PostComponents}
        </div>
      </div>
    </div>



    // <div style={{background: "#ecf0f1",height: "100vh"}}>
    //   {/* <div style={{display:"flex", justifyContent:"center"}}></div> */}
    //   <ToggleMessage />
    // </div>
  )
}
//const style = { width: 200 , backgroundColor:"white" ,borderRadius: 10,borderColor: "grey",borderWidth:1, padding: 20}


//  const ToggleMessage =() =>{
//   //let isVisible = true //cant use normal variables it will not re-render
//   let[notificationCount,setnotificationCount] = useState(0);
//   //const[isVisible, setIsVisible] = useState(false); //defining a new state variable
//   //when the value of the state variable changes, the component using the state variable re-renders 

//   function increment(){
//     setnotificationCount(notificationCount+1)
//   }

//    return(
//      <div>
//        <button onClick={increment}>Notificaiton</button>
//        {notificationCount}
//      </div>
//    )
//   }
// function PostComponent({name,subtitles,image,description,time}){
//   return <div style={style}>
//   <div style={{display: "flex"}}>
//     <img src={image} style={{
//       width:30,
//       height:30,
//       borderRadius: 20
//     }} />
//     <div style={{fontSize: 10, marginLeft: 10}}>
//       <b>
//         {name}
//       </b>
//       <div>{subtitles}</div>
//       {(time !== undefined) ?<div style={{display: "flex"}}>
//        <div>{time}</div>
//        <img src="https://i.pinimg.com/736x/43/c6/a4/43c6a49869f5cbb2cd0da32136c817f9.jpg" style={{width:12,height:12}}  />
//       </div>:null}
//     </div>

//   </div>
//   <div style={{fontSize: 15}}>
//       {description}
//     </div>
//   </div>
// }

export default App



//post component upper part
{/* <div>
          <div>
          <PostComponent 
           name={"sarthak"}
           subtitles={"20 followers"}
           time={"2m ago"}
           image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
           description={"Want to know how to win big ? checkout how these folks won $6000 in bounties."}
          />
          <br />
          </div>
          <div>
            <PostComponent 
             name={"raman"}
             subtitles={"promoted"}
             image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
             description={"Wand to get hired in 2025. The best raodmap to crack a perfect highpaying job follow this"}
            />
            <br />
          </div>
        </div> */}
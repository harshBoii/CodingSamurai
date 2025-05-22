// export function Navigation(){
//     return <>
 
//       <nav className="bg-white shadow-lg">
//         <div className="max-w-6xl mx-auto px-4">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center">
//               <span className="text-2xl font-bold text-orange-600">
//                 Coding Ninjas
//               </span>
//             </div>

//             <div className="hidden md:flex space-x-8">
//               <a href="#" className="hover:text-orange-600">Products</a>
//               <a href="#" className="hover:text-orange-600">Community</a>
//               <a href="#" className="hover:text-orange-600">Important Links</a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
// }

import Link from "next/link"

export function Navigation(){
    return <>
 

<nav className="overflow-hidden">
  <ul >
    <li className="a">
    <Link href="/" >
      Home
    </Link>
    </li>
    <li>
      <a href="#">About</a>
    </li>
    <li>
      <a href="#">Services</a>
    </li>
    <li>
      <a href="#">Contact</a>
    </li>
  </ul>
</nav>

<style jsx>
  {`@import url(https://fonts.googleapis.com/css?family=Open+Sans);

html {
  height:100%;
  background-black
  background-image: linear-gradient(to right top, #8e44ad 0%, #3498db 100%);
}

nav {
  position: fixed;       /* make it a positioning context */
  height:7vh;
  width:100vw;
  text-align:center;
  background-color:Black;
  overflow:hidden;
  z-index:100
}

nav ul {
  text-align: center;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.2) 25%, rgba(255, 255, 255, 0.2) 75%, rgba(255, 255, 255, 0) 100%);
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
}

nav ul li {
  display: inline-block;
}

nav ul li a  {
  padding: 18px;
  font-family: "Open Sans";
  text-transform:uppercase;
  color: white;
  font-size: 18px;
  text-decoration: none;
  display: block;
  transition: 
    box-shadow 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    font-size 0.3s ease;
}

nav ul li a:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: red;
  color: rgba(14, 24, 208, 0.7);
  font-size:4vh
}

.a{
padding: 18px;
  font-family: "Open Sans";
  text-transform:uppercase;
  color: white;
  font-size: 18px;
  text-decoration: none;
  display: block;
  transition: 
    box-shadow 0.3s ease,
    background 0.3s ease,
    color 0.3s ease,
    font-size 0.3s ease;}

.a:hover{
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1), inset 0 0 1px rgba(255, 255, 255, 0.6);
  background: red;
  color: rgba(14, 24, 208, 0.7);
  font-size:4vh
}

`}
</style>

</>

}


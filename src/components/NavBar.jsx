import "/src/stylesheet/removeDefaultStyle.css"
import "/src/stylesheet/styles.css"

const NavBarList =["ABOUT", "EXPERIENCE","GALLERY"]

const SocialLinksNavBar = {
    Title: ["instagram", "facebook", "linkedin","email"],
    Links: ["https://www.instagram.com/shivanshdania/", "https://www.facebook.com/shivansh.dania/", "https://www.linkedin.com/in/shivansh-dania-01a803129/","mailto:shiv.dania@gmail.com"]
}
export default function NavBar(){
   
    const Nav = NavBarList.map((item)=> 
    <a className="NavList" href= {`#${item}`} key= {item}>
        <li>{item}</li></a>)
         
  function SocialFunction(i) {return (<a className="SocialList" href = {SocialLinksNavBar.Links[i]} key={i} target="blank">
         {SocialLinksNavBar.Title[i]}</a>)}
     
     let i=0; 
     let SocialNav=[];
    
     while(i<SocialLinksNavBar.Title.length){
        SocialNav[i] = <li className="ListBackground">{SocialFunction(i)}</li>
        i++;
     }
   return( <>
        
        <ul>{Nav}</ul>
        <ul>{SocialNav}</ul>
        </>)}



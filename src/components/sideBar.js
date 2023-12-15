import classes from "./sidebar.module.css";
import MailIcon from '@mui/icons-material/Mail';
import OutboxIcon from '@mui/icons-material/Outbox';
import CreateIcon from '@mui/icons-material/Create';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux";

const Sidebar=() =>{
    const allmails=useSelector((state) => state.mailDetails.allMails);
    const userEmail=localStorage.getItem("email");
    const token=localStorage.getItem("token");

    let receivedMails=allmails.filter((mail) =>{
        return mail.receiver===userEmail;
    });

    const unreadCount=receivedMails.reduce((count,mail) =>{
        if(mail.read===false){
            count++;
        }
        return count;
    },0);

    const sideBarData=[
        {
            title:" Inbox",
            icon: <Badge color="secondary" badgeContent={unreadCount} showZero invisible={token===null}><MailIcon/></Badge>  ,
            path: "/inbox"
        },
        {
            title: "Outbox",
            icon: <OutboxIcon/>,
            path: "/outbox"
        },
        {
            title: "Compose",
            icon: <CreateIcon/>,
            path: "/compose"
        } 
    ];

    return(
        <div className={classes.sidebar}>
            <ul className={classes.sidebarList}>
                { 
                    sideBarData.map((element,index) =>{
                        return (
                                <li 
                                 key={index} 
                                 id={window.location.pathname===element.path?classes["active"]:""}
                                 onClick={()=>{window.location.pathname=element.path}}
                                 className={classes.row}>
                                    <div className={classes.icon}>{element.icon}</div>
                                    <div className={classes.title}>{element.title}</div>
                                </li>
                                )
                    }) 
                }
            </ul>
        </div>
    )
}

export default Sidebar;
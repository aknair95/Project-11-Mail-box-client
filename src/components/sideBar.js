import classes from "./sidebar.module.css";
import MailIcon from '@mui/icons-material/Mail';
import OutboxIcon from '@mui/icons-material/Outbox';
import CreateIcon from '@mui/icons-material/Create';

const Sidebar=() =>{

    const sideBarData=[
        {
            title:" Inbox",
            icon: <MailIcon/>,
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
import React from 'react'
import {Link,
    useLocation
} from "react-router-dom";
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';



const FilAriane = () => {
    let location = useLocation()
    let tableLoc = location.pathname.split('/').filter(item => item !== "")
    .reduce((first,second) => {
            const oldAllphath = first.allpath;
            const oldfullpath = first.fullpath;
            const newFullPath= oldfullpath + "/" + second
            const myBreascumb = {title:second,ref:newFullPath}
             oldAllphath.push(myBreascumb)  
             return  {"fullpath": newFullPath , "allpath" :oldAllphath}
        }, {"fullpath": "" , "allpath" : []}).allpath
    console.log(tableLoc)
    return (
        <Breadcrumb>
            <Breadcrumb.Item href="">
            <Link to={"/"}> <HomeOutlined /></Link>
            </Breadcrumb.Item>
        {tableLoc.map(item => { 
            return  (
                  <Breadcrumb.Item key={item.ref}>
                  <Link to={item.ref}>{item.title}</Link>
              </Breadcrumb.Item>
            )
        })}
        </Breadcrumb>
    )
}


export default FilAriane
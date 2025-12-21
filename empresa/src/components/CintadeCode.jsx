import React from 'react'
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaDigitalOcean } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaNode } from "react-icons/fa";


export function CintadeCode() {
    return (
        <div className="bg-fondo bg-opacity-90 flex justify-center items-center gap-12 p-6 flex-wrap">


            <FaPython className="text-4xl text-textosecundario hover:text-cian transition-colors" title="Python" />
            <IoLogoJavascript className="text-4xl text-textosecundario hover:text-cian transition-colors" title="JavaScript" />
            <FaReact className="text-4xl text-textosecundario hover:text-cian transition-colors" title="React" />
            <FaAws className="text-4xl text-textosecundario hover:text-cian transition-colors" title="AWS" />
            <FaDigitalOcean className="text-4xl text-textosecundario hover:text-cian transition-colors" title="Digital Ocean" />
            <SiGooglecloud className="text-4xl text-textosecundario hover:text-cian transition-colors" title="Google Cloud" />
            <FaHtml5 className="text-4xl text-textosecundario hover:text-cian transition-colors" title="HTML5" />
            <IoLogoCss3 className="text-4xl text-textosecundario hover:text-cian transition-colors" title="CSS3" />
            <FaNode className="text-4xl text-textosecundario hover:text-cian transition-colors" title="Node.js" />
            
        </div>
    )
}


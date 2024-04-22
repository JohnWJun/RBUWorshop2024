import React from "react";
import SakuraFalls from "@/app/_component/SakuraFalls";


type Props = {children: React.ReactNode, 
    modal: React.ReactNode };
export default function Layout({ children, modal }: Props) {
    return (
        <>
            {children}
            {modal}
            <SakuraFalls/>
        </>
    )
}
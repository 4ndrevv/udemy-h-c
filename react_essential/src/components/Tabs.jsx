
export default function Tabs({children, buttons, ButtonComponent = "menu"}) {
    //const ButtonComponent = buttonComponent;
    return (
        <>
            <ButtonComponent>
                {buttons}
            </ButtonComponent>
            {children}
        </>
        
    );
}

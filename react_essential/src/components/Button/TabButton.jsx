export default function TabButton({children, isSelected, ...gia_tri_khac}) {
    
    return (
        <li>
            <button 
                className={isSelected ? 'active' : undefined} 
                {...gia_tri_khac}
            >
                {children}
            </button>
        </li>
    );
}

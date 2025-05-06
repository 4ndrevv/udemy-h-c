export default function Section({title, children, ...gia_tri_khac}) {
    return (
        <section {...gia_tri_khac}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

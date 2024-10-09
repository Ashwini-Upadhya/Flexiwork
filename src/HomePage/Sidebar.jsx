import "./sidebar.css";

export default function Sidebar() {
    const sidebarMenu = {
        home: <a href="/home">Home</a>,
        setting: <a href="/setting">Setting</a>,
        about: <a href="/about">About Us</a>
    };

    return (
        <div className="sidebar">
            {Object.entries(sidebarMenu).map(([key, link]) => (
                <div key={key} className="sidebar-item">
                    {link}
                </div>
            ))}
        </div>
    );
}

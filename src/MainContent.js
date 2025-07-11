import "./MainContent.css";

const MainContent = ({children}) => {
    return (
        <main>
            {children} {/* MainContentの子要素を表示 */}
        </main>
    );
};

export default MainContent;
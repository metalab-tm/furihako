import './Link.css';

const Link = () => {
    const linkItems = [
        {リンク名: "You Tube", URL: "https://www.youtube.com/@metalab-ch", 説明: "XXX"},
        {リンク名: "X（旧Twitter）", URL: "https://x.com/metalrabit1987", 説明: "XXX"}
    ];

    return (
        <div id="link">
            <table id="link-table">
                <tbody>
                    <tr>
                        <th>リンク名</th>
                        <th>説明</th>
                    </tr>
                    {linkItems.map((linkItem, index) => (
                        /* ↓別タブで外部サイトを開きたいので、Linkコンポーネントは使わない */
                        <tr key={index}>
                            <td><a href={linkItem.URL} target="_blank" rel="noopener noreferrer">{linkItem.リンク名}</a></td>
                            <td>{linkItem.説明}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Link;
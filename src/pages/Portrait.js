import './Portrait.css';

const Portrait = () => {
    const portraitItems = [{システム名: "電子カタログ", URL: "https://youtu.be/ZDmgE6ALF5M", 説明: "XXX"}, {システム名: "だるまさんが転んだゲーム", URL: "https://youtu.be/i1KZ5D6Pulc", 説明: "XXX"}];

    return (
        <div id="portrait">
            <table id="portrait-table">
                <tbody>
                    <tr>
                        <th>システム名</th>
                        <th>説明</th>
                    </tr>
                    {portraitItems.map((portraitItem, index) => (
                        /* ↓別タブで外部サイトを開きたいので、Linkコンポーネントは使わない */
                        <tr key={index}>
                            <td><a href={portraitItem.URL} target="_blank" rel="noopener noreferrer">{portraitItem.システム名}</a></td>
                            <td>{portraitItem.説明}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Portrait;
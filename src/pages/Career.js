import "./Career.css";

const Career = () => {
    const careers = [
        { year: "2024", title: "フリーランスエンジニアに転身", description: "", img: "/career/001.png" },
        { year: "2019", title: "執筆", description: "", img: "/career/002.png" },
        { year: "2016", title: "開発部門のプロジェクトリーダーを担当", description: "タスクの洗い出しとアサイン／進捗管理／各種レビュー／メンバー支援と育成／関係者との調整など。", img: "" },
        { year: "2015", title: "インフラ部門に異動", description: "社内ネットワークやデータセンターの運用を担当。", img: "" },
        { year: "2014", title: "営業部門に異動", description: "", img: "" },
        { year: "2012", title: "制御系開発部門に異動", description: "接点信号を用いたハードウェア制御を担当。", img: "" },
        { year: "2010", title: "株式会社Knowlboに入社", description: "要件定義／設計／開発／テスト／保守を担当。Console／WinForms／WEBアプリを開発。", img: "" },
        { year: "2006", title: "東北大学に入学", description: "", img: "" },
        { year: "2002", title: "仙台第一高等学校に入学", description: "", img: "" }
    ];

    return (
        <div id="career">
            <div className="timeline">
                {careers.map((career, index) => (
                    <div key={index} className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}>
                        <div className="timeline-content">
                            <div className="timeline-year">{career.year}</div>
                            <div className="timeline-title">{career.title}</div>
                            {career.description && <p className="timeline-desc">{career.description}</p>}
                            {career.img && <img className="timeline-img" src={process.env.PUBLIC_URL + career.img} alt="タイムライン画像" />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Career;
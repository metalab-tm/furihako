import "./Profile.css";
import {useEffect, useState} from "react";

const Profile = () => {
    const profileImgPath = "/profile/Profile.png";

    const [imgLoaded, setImageLoaded] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.src = profileImgPath;
        img.onload = () => {
            setImageLoaded(true);
        };
    }, []);

    const profileItems = {
        氏名: "田村 光功（たむら みつのり）",
        生年月日: "1987年2月14日",
        出身地: "宮城県",
        所在地: "埼玉県",
        言語: "C#／HTML／JavaScript（React／jQuery）／CSS／VB.NET",
        フレームワーク: ".NET／.NET Framework（ASP.NET MVC／ASP.NET Web API／ASP.NET Web Forms／WinForms／Console）",
        OS: "Windows",
        WEBサーバー: "IIS",
        データベース: "SQL Server／Oracle",
        ソース管理: "Git Hub／Team Foundation Server／Visual Source Safe",
        趣味: "ゲーム／バンド活動",
        特技: "デスボイス"
    };

    return (
        <div id="profile">
            {!imgLoaded && <p id="profile-img-loading-msg">プロフィール画像を読み込み中です...</p>}

            {/* プロフィール画像の読み込みが完了してから表示する */}
            {imgLoaded && (
                <>
                    <img id="profile-img" src={profileImgPath} alt="プロフィール画像" />
                    <table id="profile-table">
                        <tbody>
                            {Object.entries(profileItems).map(([label, value], index) => (
                                <tr key={index}>
                                    <th>{label}</th><td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
};

export default Profile;
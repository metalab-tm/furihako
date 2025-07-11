import './Contact.css';
import {useState} from "react";

const Contact = () => {
    /* いずれはバックエンドを実装し、SMTPサーバー経由で送信するようにするが、ひとまずFormspreeを使用して簡易的に実装 */
    const [formData, setFormData] = useState({name: "", email: "", msg: ""});
    const [submitStatus, setSubmitStatus] = useState(null);
    const [submitStatusFailed, setSubmitStatusFailed] = useState(null);

    const handleFormValueChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); /* 送信時にページがリロードされるのを防ぐために必要 */
        setSubmitStatus("送信中です...");

        try {
            const response = await fetch("https://formspree.io/f/xeokdnry", { /* Formspreeのエンドポイント */
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    お名前: formData.name,
                    メールアドレス: formData.email,
                    お問い合わせ内容: formData.msg
                })
            });

            if (response.ok) {
                setSubmitStatus("送信が完了しました。ありがとうございました。");
                setSubmitStatusFailed(false);
                setFormData({ name: "", email: "", msg: "" });
            }
            else {
                setSubmitStatus("送信に失敗しました。もう一度お試しください。");
                setSubmitStatusFailed(true);
            }
        } 
        catch (error) {
            setSubmitStatus("ネットワークエラーが発生しました。インターネット接続をご確認ください。");
            setSubmitStatusFailed(true);
        }
    };

    return (
        <div id="contact">
            <form onSubmit={handleSubmit}>
                <label>
                    お名前
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleFormValueChange}
                        required
                    />
                </label>
                <br />
                <label>
                    メールアドレス
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormValueChange}
                        required
                    />
                </label>
                <br />
                <label>
                    お問い合わせ内容
                    <textarea
                        name="msg"
                        value={formData.msg}
                        onChange={handleFormValueChange}
                        required
                        rows={30}
                    />
                </label>
                <br />
                <button type="submit">送信</button>
                {/* submitStatusがnullでない時だけ、<p>を表示する */}
                {submitStatus && (
                    <p className={`submit-status ${submitStatusFailed ? "error-msg" : "success-msg"}`}>
                        {submitStatus}
                    </p>)}
            </form>
        </div>
    );
};

export default Contact;
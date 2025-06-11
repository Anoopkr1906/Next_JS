export default function Profile(){
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f0f0f0",
            padding: "5px"
        }}>
            <h1>Anoop Kumar Burnwal</h1>
            <img
                src="https://avatars.githubusercontent.com/u/184848969?v=4"
                style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "50%",
                    border: "2px solid #333",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
                }}
                alt="Profile"
            />
            <h2>Student At NIT Jamshedpur <span style={{color:"green"}}>(ECM Branch)</span></h2>
        </div>
    )
}
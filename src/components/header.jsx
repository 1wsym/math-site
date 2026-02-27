import Card from "./cards";

function Header() {
    return (
        <>
            <header>
                <div className="main-title">
                    <h1>Математика</h1>
                    <h2>МатематикаМатематикаМатематикаМатематикаМатематика!</h2>
                </div>
                <div id="cardsInHeader">
                    <Card
                        title={"Теория"}
                        description={"Теория Теория Теория Теория Теория Теория Теория Теория"}
                    />
                    <Card
                        title={"Практика"}
                        description={"Практика Практика Практика Практика Практика Практика Практика Практика Практика Практика Практика Практика"}
                    />
                    <Card
                        title={"Калькулятор"}
                        description={"Калькулятор Калькулятор Калькулятор"}
                    />
                    <Card
                        title={"Учебные материалы"}
                        description={"Учебные материалы ~~~~~~~~~ Учебные материалы ~~~~~~~~~ Учебные материалы"}
                    />
                </div>
            </header>
        </>
    );
}

export default Header;
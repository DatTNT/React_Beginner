import HomPage from '../../assets/Video_HomePage.mp4';

const HomePage = (props) => {
    return (
        <div className="homepage-container">
            <video autoPlay loop muted>
                <source src={HomPage} type="video/mp4" />

            </video>
        </div>

    )


}
export default HomePage
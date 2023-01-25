import { useSelector } from "react-redux";

const PageLoader = () => {
    const loading = useSelector((state) => state.user.isLoading);
    return (
        <div className={loading ? "preloader" : ""}>
            <div className="preloader-icon"></div>
        </div>
    )
}
export default PageLoader;
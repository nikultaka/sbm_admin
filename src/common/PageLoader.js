import { useSelector } from "react-redux";

const PageLoader = () => {
    const loading = useSelector((state) => state.user.isLoading);
    return (
        <div className={loading ? "preloader" : ""}>
            <div className="preloader-icon"></div>
            <span>{loading ? "Loading..." : ""}</span>
        </div>
    )
}
export default PageLoader;
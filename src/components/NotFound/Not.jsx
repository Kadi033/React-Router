import { not } from "../../assets"

const Not = () => {
    return(
        <div className="h-screen" style={{ 
            backgroundImage: `url(${not})`, 
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
        }}>
        </div>
    )
}
export default Not
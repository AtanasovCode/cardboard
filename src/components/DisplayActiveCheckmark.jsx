import { CheckCircle, Check } from "@phosphor-icons/react";


const DisplayActiveCheckmark = () => {
    return (
        <div className="absolute right-[5%] top-[5%] w-6 h-6 
        bg-slate-100 border-2 border-main-background rounded-full
        flex items-center justify-center
    ">
            <Check size="60%" weight="regular" color="#000" />
        </div>
    );
}

export default DisplayActiveCheckmark;
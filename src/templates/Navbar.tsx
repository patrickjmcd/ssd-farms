import Navbar from "../components/Navbar";
import Logo from "@/components/Logo";

const navBar = async () => {

    const storage = {
        label: "Storage",
        href: "/storage",
    }


    return <Navbar items={[storage]} logo={<Logo xl siteName={"SSD Farms"}/>}
                   textColor="text-sky-900 dark:text-sky-950"
                   backgroundColor="bg-slate-200 dark:bg-slate-400"
                   hoverTextColor={"hover:text-green-800"}
    />;
};

export default navBar;

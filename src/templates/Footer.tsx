import CompactFooter from "@/components/Footer/CompactFooter";
import Logo from "@/components/Logo";

const Footer = () => {
	return (
		<div className="bg-sky-900">
			<div className="py-4 px-4 text-gray-200">
				<CompactFooter
					logo={<Logo siteName={"SSD Farms"} color="text-gray-200" />}
					siteTitle={"SSD Farms"}
					links={[[{ label: "Contact Us", href: "/contact-us" }]]}
				/>
			</div>
		</div>
	);
};

export default Footer;

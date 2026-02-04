import ContactUs from "@/templates/ContactUs";

const ContactUsPage = async () => {
	const emailServiceId = process.env.EMAIL_SERVICE_ID as string;
	const emailTemplateId = process.env.EMAIL_TEMPLATE_ID as string;
	const emailPublicKey = process.env.EMAIL_PUBLICKEY as string;

	return (
		<div className={"flex-grow flex flex-col"}>
			<div className="flex-grow flex flex-col items-center">
				<h1 className="md:text-6xl text-4xl font-bold text-sky-950 dark:text-sky-500 uppercase my-10">
					Contact Us
				</h1>
				<ContactUs
					emailPublicKey={emailPublicKey}
					emailServiceId={emailServiceId}
					emailTemplateId={emailTemplateId}
				/>
			</div>
		</div>
	);
};

export default ContactUsPage;

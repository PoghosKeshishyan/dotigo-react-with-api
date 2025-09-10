import './Heading.css';

export default function Heading({ hostingHeading, billingType, setBillingType }) {
    return (
        <div className='hosting-heading'>
            <h2>{hostingHeading.title}</h2>
            <p>{hostingHeading.subtitle}</p>

            <div className="choose-paying-way flex-center">
                <span>{hostingHeading.plan_billing_option.split('/')[0]}</span>

                <label className="switch">
                    <input
                        type="checkbox"
                        checked={billingType === "/year"}
                        onChange={() => setBillingType(billingType === "/month" ? "/year" : "/month")}
                    />

                    <span className="slider"></span>
                </label>

                <span>{hostingHeading.plan_billing_option.split('/')[1]}</span>
            </div>
        </div>
    )
}

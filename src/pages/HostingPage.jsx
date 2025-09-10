import { useEffect, useState } from 'react';
import { getHostingPageData } from '../api/hosint-page';
import { getHostingData } from "../api/global";
import Loading from '../components/loading';
import Heading from '../components/hosting/Heading';
import Plans from '../components/hosting/Plans';
import QuestionList from '../components/hosting/QuestionList';
import '../stylesheets/hosting.css';

export default function HostingPage() {
  const [loading, setLoading] = useState(true);
  const [hostingHeading, setHostingHeading] = useState(null);
  const [questionData, setQuestionData] = useState(null);
  const [hostingPlans, setHostingPlans] = useState(null);
  const [billingType, setBillingType] = useState("/month");

  useEffect(() => {
    const loadingData = async () => {
      const data = await getHostingPageData();
      setHostingHeading(data.heading[0]);
      setQuestionData(data.question);
    };

    loadingData();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadingData = async () => {
      const data = await getHostingData(billingType);
      setHostingPlans(data);
    };

    loadingData();
  }, [billingType]);

  useEffect(() => {
    if (hostingHeading && hostingPlans) {
      setLoading(false);
    }
  }, [hostingHeading, hostingPlans]);

  if (loading) {
    return <Loading />;
  }

  return hostingHeading && hostingPlans && (
    <div className="HostingPage wrapper">
      <Heading hostingHeading={hostingHeading} billingType={billingType} setBillingType={setBillingType} />
      <Plans plans={hostingPlans} />
      <QuestionList questionData={questionData} />
    </div>
  )
}
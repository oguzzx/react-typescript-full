import { CreditCard, Headset, RotateCw, Truck } from "lucide-react";
import "./policy.css";
function Policy() {
  return (
    <section className="policy mb-5">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck">
            <Truck />
            </i>
            <div className="policy-texts">
              <strong>FREE DELIVERY</strong>
              <span>From $59.89</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset">
            <Headset />
            </i>
            <div className="policy-texts">
              <strong>SUPPORT 24/7</strong>
              <span>Online 24 hours</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise">
            <RotateCw />
            </i>
            <div className="policy-texts">
              <strong> 30 DAYS RETURN</strong>
              <span>Simply return it within 30 days</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card">
            <CreditCard />
            </i>
            <div className="policy-texts">
              <strong> PAYMENT METHOD</strong>
              <span>Secure Payment</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Policy;

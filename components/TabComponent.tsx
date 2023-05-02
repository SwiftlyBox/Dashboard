import { Tabs } from "antd";
import { Bar } from 'react-chartjs-2';


const { TabPane } = Tabs;
// const data = {
//     labels: ['A', 'B', 'C', 'D', 'E'],
//     datasets: [
//       {
//         data: [20, 40, 60, 80, 100],
//         backgroundColor: '#4299e1',
//         hoverBackgroundColor: '#2c5282',
//         borderWidth: 0,
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     scales: {
//       xAxes: [{ display: false }],
//       yAxes: [{ display: false }],
//     },
//     tooltips: {
//       enabled: false,
//     },
//     legend: {
//       display: false,
//     },
//   };
const TabComponent: React.FC = () => {

  return (
    <Tabs defaultActiveKey="1" tabPosition="top" >
      <TabPane tab={<span className="font-bold">Customer Clicks</span>} key="1"  >
        <div className="mt-4 text-5xl font-bold">
          25%
        </div>
        <span>Not looking good</span>
        <div className="mt-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed lacus
            ac ante efficitur suscipit vel eget massa.
          </p>
        </div>
         {/* <div className="w-full max-w-sm">
            BAR CHART -struggling and also the business transaction card 
          </div> */}
      </TabPane>
      <TabPane tab={<span className="font-bold">Competition Strength </span>} key="2">
        <p>Some dummy text for Tab 2</p>
      </TabPane>
    </Tabs>
  );
};

export default TabComponent;

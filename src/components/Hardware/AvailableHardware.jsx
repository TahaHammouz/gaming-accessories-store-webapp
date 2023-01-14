import HardwareItems from "./HardwareItems/HardwareItems";
import styles from "./AvailableHardware.module.css";
import Card from "../UI/Card";
const DUMMY_Products = [
  {
    id: "h1",
    image: "src/assets/cpui9.jpg",
    name: "Intel Core i9-13900K Desktop Processor 24 cores (8 P-cores + 16 E-cores) 36M Cache, up to 5.8 GHz",
    price: "599.99$",
  },
  {
    id: "h2",
    image: "src/assets/motherboard.jpg",
    name: "ASUS ROG Strix Z790-E Gaming WiFi 6E LGA 1700(Intel® 12th&13th Gen) ATX Gaming Motherboard(PCIe 5.0, DDR5,18+1 Power Stages,2.5 Gb LAN,Thunderbolt 4,5xM.2, 1xPCIe 5.0 M.2,Front Panel USB 3.2 Port)",
    price: "499.99$",
  },
  {
    id: "h3",
    image: "src/assets/pc.jpg",
    name: "Corsair 4000D Airflow Tempered Glass Mid-Tower ATX PC Case - Black",
    price: "94.99$",
  },
  {
    id: "h4",
    image: "src/assets/rtx.jpg",
    name: "ZOTAC GeForce RTX™ 3060 Ti Twin Edge OC LHR 8GB GDDR6 256-bit 14 Gbps PCIE 4.0 Gaming Graphics Card, IceStorm 2.0 Advanced Cooling, Active Fan Control, Freeze Fan Stop ZT-A30610H-10MLHR",
    price: "457.99$",
  },
];

const AvailableHardware = () => {
  const parts = DUMMY_Products.map((hardware) => (
    <HardwareItems
      id={hardware.id}
      key={hardware.id}
      image={hardware.image}
      hardware={hardware.name}
      price={hardware.price}
      name={hardware.name}
    />
  ));
  return (
    <section className={styles.hardware}>
      <Card>
        <ul>{parts}</ul>
      </Card>
    </section>
  );
};

export default AvailableHardware;

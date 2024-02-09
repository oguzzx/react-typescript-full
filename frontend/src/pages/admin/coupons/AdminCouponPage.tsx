import { Button, Popconfirm, Space, Spin, Table, message } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteOutlined } from "@ant-design/icons";

function AdminCouponPage() {
  const apiUrl = "http://localhost:5000";
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getCoupons = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response = await fetch(`${apiUrl}/api/coupons`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCoupons(data);
        setLoading(false);
      }, 1300);
    } catch (error) {
      console.log(error);
    }
  };

const handleDelete = async (key: string) => {
    try {
      const response = await fetch(`${apiUrl}/api/coupons/${key}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        message.success("Kupon silindi");
        getCoupons();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Kupon Kodu",
      dataIndex: "code",
      key: "code",
    },
    {
      title: "İndirim Oranı",
      dataIndex: "discount",
      key: "discount",
    },
    {
      title: "İşlem",
      key: "action",
    render: (_: string, record: { _id: string }) => (
        <Space size="middle">
          <Button
          className="bg-blue-500 text-white"
            type="primary"
            onClick={() => navigate(`/admin/coupons/update/${record._id}`)}
          >
            Düzenle
          </Button>
          <Popconfirm
            title="Kuponu silmek istediğinize emin misiniz?"
            onConfirm={() => handleDelete(record._id)}
            okText="Evet"
            cancelText="Hayır"
          >
            <Button className="flex items-center justify-center" type="primary" danger>
              <DeleteOutlined />
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    getCoupons();
  }, []);

  return (
    <Spin spinning={loading}>
      <Table columns={columns} dataSource={coupons} />
    </Spin>
  );
}

export default AdminCouponPage;

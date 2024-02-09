import { Button, Popconfirm, Space, Table, message } from "antd";
import { useState, useEffect } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function AdminCategoryPage() {
  const apiUrl = "http://localhost:5000";
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getCategories = async () => {
    setLoading(true);
    try {
      setTimeout(async () => {
        const response = await fetch(`${apiUrl}/api/categories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setCategories(data);
        setLoading(false);
      }, 1300);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(categories);

const handleDelete = async (key: string) => {
    try {
        const response = await fetch(`${apiUrl}/api/categories/${key}`, {
            method: "DELETE",
        });
        if (response.ok) {
            message.success("Kategori silindi");
            getCategories();
        } else {
            message.error("Kategori silinemedi");
        }
    } catch (error) {
        console.log(error);
    }
};

  const columns = [
    {
        title: "Kategori Resmi",
        dataIndex: "image",
        key: "image",
        render: (text: string) => (
            <img
                src={text}
                alt="avatar"
                width="70"
                style={{
                    borderRadius: "10px",
                }}
            />
        ),
    },
    {
        title: "Kategori Adı",
        dataIndex: "name",
        key: "name",
        render: (text: string) => <a>{text}</a>,
    },

    {
      // delete butonu
      title: "Action",
      dataIndex: "action",
      key: "action",
    render: (_: any, record: any): React.ReactNode => (
        <Space size={"middle"}>
          <Popconfirm
            title="Kategoriyi silmek istediğinize emin misiniz?"
            onConfirm={() => handleDelete(record.key)}
            okText="Evet"
            cancelText="Hayır"
          >
            <DeleteOutlined
              style={{
                color: "purple",
                fontSize: "20px",
              }}
            />
          </Popconfirm>
          <Button
            className="bg-blue-500 text-white flex items-center justify-center"
            type="primary"
            onClick={() => {
              navigate(`/admin/categories/update/${record.key}`, {
                replace: true,
              });
            }}
          >
            <EditOutlined />
          </Button>
        </Space>
      ),
    },
  ];

const data = categories.map((category: { _id: string, name: string, img: string }) => {
    return {
        key: category._id,
        name: category.name,
        image: category.img,
    };
});

useEffect(() => {
    getCategories();
}, []);

  return (
    <div>
      <Table columns={columns} dataSource={data} loading={loading} />
    </div>
  );
}

export default AdminCategoryPage;

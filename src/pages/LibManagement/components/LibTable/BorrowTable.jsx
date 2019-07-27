import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import TableFilter from "./TableFilter";
import styles from "./index.module.scss";
import { Button } from "@alifd/next";
import styless from "./LibTable.module.scss";

// MOCK 数据，实际业务按需进行替换
const getData = () => {
  return Array.from({length: 11}).map((item, index) => {
    return {
      number: `${index}`,
      isbn: `1000${index}`,
      cate: "滴滴出行",
      bookName: "陈大文",
      idCard: `12345${index}`,
      authorName: "淘大宝",
      borrowDate: "2018-10-01",
      returnDate: "2019-10-01",
    };
  });
};

export default function BorrowTable () {
  const [isLoading, setIsloading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const mockApi = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getData());
      }, 600);
    });
  };

  const fetchData = async () => {
    await setIsloading(true);
    mockApi().then((data) => {
      setDataSource(data);
      setIsloading(false);
    });
  };

  const handlePaginationChange = (current) => {
    fetchData(current);
  };

  const handleFilter = () => {
    fetchData();
  };

  const renderOper = () => {
    // return <a className={`${styles.button} ${styles.detailButton}`}>查看</a>;
    return (
      <div>
        <Button className={styles.marginRight}
          // onClick={handleDetailClick}
        >
          查看
        </Button>
        <Button
          type="primary"
          className={styless.borrowButton}
          // onClick={handleBorrowClick}
        >
          通过
        </Button>
        <Button
          type="primary"
          className={styless.borrowButton}
          // onClick={handleBorrowClick}
          warning
        >
          拒绝
        </Button>
      </div>
    );
  };

  const config = [
    {
      label: "司机ID",
      component: "Input",
      componnetProps: {
        placeholder: "请输入",
      },
      formBinderProps: {
        name: "bookName",
        triggerType: "onBlur",
      },
    },
    {
      label: "司机名称",
      component: "Input",
      componnetProps: {
        placeholder: "请输入",
      },
      formBinderProps: {
        name: "isbn",
        triggerType: "onBlur",
      },
    },
    {
      label: "所属平台",
      component: "Input",
      componnetProps: {
        placeholder: "请输入",
      },
      formBinderProps: {
        name: "publisher",
        triggerType: "onBlur",
      },
    },
  ];
  const columns = [
    {
      title: "司机ID",
      dataIndex: "number",
    },
    // {
    //   title: '司机',
    //   dataIndex: 'isbn',
    // },
    {
      title: "司机名称",
      dataIndex: "bookName",
    },
    {
      title: "所属平台",
      dataIndex: "cate",
    },
    {
      title: "星级",
      dataIndex: "idCard",
    },
    {
      title: "里程",
      dataIndex: "authorName",
    },
    // {
    //   title: '借阅日期',
    //   dataIndex: 'borrowDate',
    // },
    // {
    //   title: '归还日期',
    //   dataIndex: 'returnDate',
    // },
    {
      title: "操作",
      dataIndex: "oper",
      cell: renderOper,
    },
  ];
  return (
    <div>
      <TableFilter config={config}
                   onChange={handleFilter}/>
      <CustomTable
        isLoading={isLoading}
        dataSource={dataSource}
        columns={columns}
        paginationChange={handlePaginationChange}
      />
    </div>
  );
}

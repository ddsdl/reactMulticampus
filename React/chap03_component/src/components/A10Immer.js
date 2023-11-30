// npm i immer
import React, { useCallback, useState } from "react";
import { produce } from 'immer'     // 10.X
// import produce from 'immer'      // 9.X


function A10Immer() {
  const [person, setPerson] = useState({
    name: "",
    info: {
      address: "",
      arr: [10, 20, 30],
      etc: {
        one: "",
        two: "",
      },
    },
  });

  const changeName = useCallback(() => {
    // const newData = { ...person, name: '흥부' };
    // setPerson(newData);
    setPerson((x) => ({ ...x, name: '흥부' }));
  }, []);

  const changeAddress = useCallback(() => {
    // const newData = {
    //   ...person,
    //   info: {
    //     ...person.info,
    //     address: '부산'
    //   }
    // };
    // setPerson(newData)
    setPerson((x) => {
      return {
        ...x,
        info: {
          ...x.info,
          address: '부산'
        }
      };
    })
  }, []);

  const changeOne = useCallback(() => {
    setPerson((person) => {
      return {
        ...person,
        info: {
          ...person.info,
          etc: {
            ...person.etc,
            one: '복잡하다.....'
          }
        }
      };
    })
  }, []);

  const addArray = useCallback(() => {
    const random = Math.ceil(Math.random() * 100);
    setPerson((person) => {
      return {
        ...person,
        info: {
          ...person.info,
          arr: person.info.arr.concat(random)
        }
      }
    })
  }, []);


  // immer
  // 1. 계층이 깊다
  // 2. 배열 또는 객체의 조작이 빈번하다
  const changeNameImmer = useCallback(() => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        draft.name = '향단'
      });
      return newData;
    });
  }, []);

  const changeAddressImmer = useCallback(() => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        // 객체의 추가, 수정, 삭제는 원래 객체를 조작하는 매서드를 그대로 사용 가능
        draft.info.address = '전주';
      });
      return newData;
    })
  }, []);
  const addInfoImmer = useCallback((key, value) => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        // 객체의 추가, 수정, 삭제는 원래 객체를 조작하는 매서드를 그대로 사용 가능
        draft.info[key] = value;
      });
      return newData;
    })
  }, []);
  const deleteInfoImmer = useCallback((key) => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        // 객체의 추가, 수정, 삭제는 원래 객체를 조작하는 매서드를 그대로 사용 가능
        delete draft.info[key];
      });
      return newData;
    })
  }, []);

  const changeOneImmer = useCallback(() => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        draft.info.etc.one = '간단하네...';
      });
      return newData;
    })
  }, []);

  const addArrayImmer = useCallback(() => {
    const random = Math.ceil(Math.random() * 100);
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        draft.info.arr.push(random);
      });
      return newData;
    })
  }, []);

  const updateArrayImmer = useCallback((index, value) => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        draft.info.arr[index] = value;
      });
      return newData;
    })
  }, []);

  const deleteArrayImmer = useCallback((index) => {
    setPerson((person) => {
      const newData = produce(person, (draft) => {
        draft.info.arr.splice(index, 1);
      });
      return newData;
    })
  }, []);


  return (
    <div className="mb-5">
      <h3>A10 Immer</h3>

      Name: {person.name}
      <br />

      Address: {person.info.address} / {person.info.tel}
      <br />

      One: {person.info.etc.one}
      <br />

      Ary:{" "}
      {person.info.arr.map((item, i) => (
        <span key={i}>{item} </span>
      ))}
      <br />

      <button onClick={changeName}>Name</button>
      <button onClick={changeAddress}>Address</button>
      <button onClick={changeOne}>One</button>
      <button onClick={addArray}>ADD</button>
      <br />

      <button onClick={changeNameImmer}>Name</button>
      <button onClick={changeAddressImmer}>Address</button>
      <button onClick={(evt) => addInfoImmer('tel', '010-7894-5612')}>TEL</button>
      <button onClick={(evt) => deleteInfoImmer('tel')}>Delete TEL</button>
      <button onClick={changeOneImmer}>One</button>

      <button onClick={addArrayImmer}>ADD</button>
      <button onClick={() => updateArrayImmer(1, 2000)}>UPDATE</button>
      <button onClick={() => deleteArrayImmer(1)}>DELETE</button>
    </div>
  );
}
export default A10Immer;

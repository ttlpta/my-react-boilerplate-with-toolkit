import styled from "styled-components";

export default styled.div`
  padding : 30px;
  table {
    border-collapse: collapse;
    width: 100%;
    thead {
      tr {
        td {
          border : none;
          padding: 0px 5px 0px 5px;
          > div {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            > div:first-child {
              margin-right: 10px;
              font-size: 14px;
              color: #444;
            }
          }
          &:first-child {
            text-align : center
          }
        }
      }
      
    }
    tbody {
      tr {
        &:nth-child(even) {
          background-color: #F1F1F1;
        }
        &:nth-child(odd) {
          background-color: #FFF;
        }
        &.visited {
          background-color : #bbeaff;
        }
        th {
          font-weight : bold;
          background-color : #ffffcc;
          cursor : pointer;
          user-select : none;
          &:after {
            content : ' \u2193'
          }
          &.desc:after {
            content : ' \u2191'
          }
        }
        th, td {
          height: 44px;
          border: 1px solid #d4d4d4;
          color: #555555;
          padding: 11px 5px 11px 5px;
          vertical-align: middle;
          text-align : center;
          width : 7%;
          &:nth-last-child(1){
            width : 10%;
            > div {
              display: flex;
              justify-content: space-around;
              > span {
                cursor : pointer;
                &:hover {
                  text-decoration : underline;
                }
              }
            }
          }
          &:nth-last-child(2) {
            width : 22%;
          }
        }
      }
    }
  }
`;

import styled from "styled-components";

export const SearchBoxStyle = styled.div.attrs((props) => ({
  className: props.className,
}))`
.search-container{
    flex:1;
    position:relative;

    .vk1 {
        position: absolute;
        display:flex;
        flex-direction: column; 
        background-color: white;
        z-index: 100;
        padding:1rem;
        margin:0 3rem;
        top: 100%;
        color: black;
        width: 72.8%;

        .search_resule {
            padding:.5rem 0;
            margin-bottom:.5rem
        }
        .search_resule:hover{
          background-color: #F1F3F6;
          border-radius:.5rem
        }
        .link_class{
          display:flex;
        }
        .search_resule_img{
          height: 2rem;
          width: 2rem;
          margin:0 1rem 0 .5rem;
        }
        .ser_name{
          font-weight:500;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    .vk {
        position: absolute;
        display:flex;
        flex-direction: column; 
        background-color: white;
        z-index: 100;
        padding:1rem;
        margin:0 3rem;
        top: 100%;
        color: black;
        width: 86.8%;

        .search_resule {
            padding:.5rem 0;
            margin-bottom:.5rem
        }
        .search_resule:hover{
          background-color: #F1F3F6;
          border-radius:.5rem
        }
        .link_class{
          display:flex;
        }
        .search_resule_img{
          height: 2rem;
          width: 2rem;
          margin:0 1rem 0 .5rem;
        }
        .ser_name{
          font-weight:500;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
  }

  .search-container .search-inner {
    flex: 1;
    display: flex;
    align-items: center;
    border: 1px solid lightgray;
    margin: 0 3rem;
    background-color: #fff;
    height: 2.5rem;

    > input {
      width: 100%;
      border: none;
      outline: none;
      padding: 0 0.5rem;
    }

    > button {
      border: none;
      color: white;
      font-weight: bold;
      font-size: 1rem;
      background-color: #4ac85d;
      padding: 0.7rem 1rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
    } 
    }
`;
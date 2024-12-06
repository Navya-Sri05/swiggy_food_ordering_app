import { createSlice ,current} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        // items:["sajan","navya"],
        items:[],
    },

    reducers:{
        addItem:(state,action)=>{
            //mutating the state directly here
            state.items.push(action.payload);

        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        //original state {items : ['ice cream']}
        clearCart:(state)=>{
            // console.log(state);
            // console.log(current(state));
            // state=[];
            // console.log(state);


            state.items.length=0; // state=[]
            //return{items: []}; -->this new object will be replaced inside the original state={ items :[]}
        },
     },

});

//we need to export reducers and actions

export const { addItem ,removeItem ,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
export const random = (n1, n2 = 0) =>{
    return Math.random() * (n2-n1) + n1;
};

export const floor = (n1) => {
    return Math.floor(n1);
};

export const vector = (n1, n2) => {
    return {x:n1, y:n2};
};

export const PI = Math.PI;
export const TWO_PI = PI * 2;
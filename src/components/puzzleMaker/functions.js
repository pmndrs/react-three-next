

export const createCorners = (x, y) => {
    let first_corner = 1
    let second_corner = y
    let third_corner = (x * y) - (y - 1)
    let fourth_corner = x * y
    let mesh_calc_corners = {

    }
    let first_render_calc_corners = [first_corner, second_corner, third_corner, fourth_corner]
    return {
        mesh_calc_corners, first_render_calc_corners
    }
}

export const createEdges = (c_1, c_2, c_3, c_4, yInteger) => {
    let first_edges = [];
    let second_edges = [];
    let third_edges = [];
    let fourth_edges = [];

    // calc first edges
    for (let index = c_1; index < c_2; index++) {
        first_edges.push(index);
    }

    // calc second edges
    for (let index = c_2; index < c_3; index = index + yInteger) {
        second_edges.push(index);
    }

    // calc third edges
    for (let index = c_2; index < c_3; index = index + yInteger) {
        third_edges.push(index + 1);
    }

    // calc fourth edges
    for (let index = c_3; index < c_4; index++) {
        fourth_edges.push(index);
    }

    // for calculating specific meshes
    let mesh_calc_edges = {
        first: first_edges,
        last: fourth_edges
    }

    let first_render_calc_edges = [...first_edges, ...second_edges, ...third_edges, ...fourth_edges]

    return {
        mesh_calc_edges, first_render_calc_edges
    }
}

// first pass ( just building the array )
export const FirstRenderBuildPuzzle = (x, y) => {
    let positions = [];
    for (let x_pos = 0; x_pos < x; x_pos++) {
        for (let y_pos = 0; y_pos < y; y_pos++) {
            positions.push({ x: x_pos * 15, y: y_pos * 15 })
        }
    }
    return positions;
}

// second pass ( adding color to the array and the parts of it)
export const SecondRenderBuildPuzzle = (x, y, positions) => {
    // corners
    let { first_render_calc_corners } = createCorners(x, y);
    let corners = first_render_calc_corners;
    // edges
    let { first_render_calc_edges } = createEdges(...corners, y);
    let edges = first_render_calc_edges;

    let sum = 0
    for (let index = 0; index < positions.length; index++) {
        sum += 1
        let first_type = corners.includes(sum) ? "corner" : edges.includes(sum) ? "edge" : "between";
        let c_position = positions[index];
        c_position["first_render"] = first_type

    }

    return positions;
}

// third pass ( adding a mesh to the array)
export const ThirdRenderBuildPuzzle = (positions) => {
    let mesh = null;
    const { mesh_calc_corners, first_render_calc_corners
    } = createCorners(x, y);
    let corners = first_render_calc_corners;
    const { mesh_calc_edges
    } = createEdges(...corners, y)
    for (let index = 0; index < positions.length; index++) {

    }

    return positions;
}
import { Line } from '@react-three/drei';
import { Vector3 } from 'three';

export const GridLine = ({ start, end, enabled }) => {
    const points = [new Vector3(...start), new Vector3(...end)];
    const color = enabled ? 0x00ff00 : 0xff0000;

    return (
        <Line
            points={points}
            color={color}
        />
    );
};

export const Grid = ({ ...props }) => {
    const lines = [];

    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            const enabled = Math.random() > 0.5; // Randomly enable or disable each line

            // Vertical line
            lines.push(
                <GridLine
                    key={`v${i}-${j}`}
                    start={[i * 10, 0, j * 10]}
                    end={[(i + 1) * 10, 0, j * 10]}
                    enabled={enabled}
                />
            );

            // Horizontal line
            lines.push(
                <GridLine
                    key={`h${i}-${j}`}
                    start={[i * 10, 0, j * 10]}
                    end={[i * 10, 0, (j + 1) * 10]}
                    enabled={enabled}
                />
            );
        }
    }

    return <>{lines}</>;
};
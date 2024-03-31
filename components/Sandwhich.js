import {useSandwhich} from "../hooks/useSandwhich";
import {Png} from "@react-three/drei/native"

export const Sandwhich = () => {
    const ingredients = useSandwhich((state) => state.ingredients);
    return (
        <group>
            <Png src="eatsAPP\assets\models\Mushroom_baseColor.png"/>

        </group>
    )
};
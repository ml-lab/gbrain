export class KERNEL_ADJMATRIX_UPDATE {
    constructor() {

    }

    static getSrc(geometryLength) {
        return ["x", ["adjacencyMatrix"],
            // head
            "",

            // source
            `vec4 adjMat = adjacencyMatrix[x]; 
            vec4 adjMatB = adjacencyMatrixB[x];

            float linkLayerNum = adjMat.x;
            float linkWeight = adjMat.z;
            float linkTypeParent = adjMat.w;
            
            if(linkTypeParent == 0.5 && linkLayerNum > 0.0) {
                float id = adjMatB.z;
                float idInv = adjMatB.w;
            
                vec2 xGeometryCurrentChild = get_global_id(id, bufferNodesWidth, `+geometryLength.toFixed(1)+`);
                vec2 xGeometryParent = get_global_id(idInv, bufferNodesWidth, `+geometryLength.toFixed(1)+`);

                float childGOutputA = dataB[xGeometryCurrentChild].z;
                float parentGErrorA = dataB[xGeometryParent].w;
                
                float childGOutputB = dataF[xGeometryCurrentChild].x;
                float parentGErrorB = dataF[xGeometryParent].y;
                
                float childGOutputC = dataF[xGeometryCurrentChild].z;
                float parentGErrorC = dataF[xGeometryParent].w;
                
                float childGOutputD = dataG[xGeometryCurrentChild].x;
                float parentGErrorD = dataG[xGeometryParent].y;
                
                float childGOutputE = dataG[xGeometryCurrentChild].z;
                float parentGErrorE = dataG[xGeometryParent].w;
                
                float childGOutputF = dataH[xGeometryCurrentChild].x;
                float parentGErrorF = dataH[xGeometryParent].y;
                
                float childGOutputG = dataH[xGeometryCurrentChild].z;
                float parentGErrorG = dataH[xGeometryParent].w;
            
                float lr = learningRate;
                float l2_decay = 0.01;
                float gpu_batch_size = 7.0;
                float br = gpu_batch_repeats;
                
                float derivA = (childGOutputA < 0.0) ? 0.01 : childGOutputA;
                float derivB = (childGOutputB < 0.0) ? 0.01 : childGOutputB;
                float derivC = (childGOutputC < 0.0) ? 0.01 : childGOutputC;
                float derivD = (childGOutputD < 0.0) ? 0.01 : childGOutputD;
                float derivE = (childGOutputE < 0.0) ? 0.01 : childGOutputE;
                float derivF = (childGOutputF < 0.0) ? 0.01 : childGOutputF;
                float derivG = (childGOutputG < 0.0) ? 0.01 : childGOutputG;
                
                if(linkLayerNum == layerCount-1.0) {
                    derivA = childGOutputA;
                    derivB = childGOutputB;
                    derivC = childGOutputC;
                    derivD = childGOutputD;
                    derivE = childGOutputE;
                    derivF = childGOutputF;
                    derivG = childGOutputG;
                }
                
                float bsm = 0.0;
                bsm = (parentGErrorA != 0.0) ? bsm+=1. : bsm;
                bsm = (parentGErrorB != 0.0) ? bsm+=1. : bsm;
                bsm = (parentGErrorC != 0.0) ? bsm+=1. : bsm;
                bsm = (parentGErrorD != 0.0) ? bsm+=1. : bsm;
                bsm = (parentGErrorE != 0.0) ? bsm+=1. : bsm;
                bsm = (parentGErrorF != 0.0) ? bsm+=1. : bsm;
                bsm = (parentGErrorG != 0.0) ? bsm+=1. : bsm;
                
                linkWeight += (-lr*parentGErrorA*derivA)/(bsm*br);
                linkWeight += (-lr*parentGErrorB*derivB)/(bsm*br);
                linkWeight += (-lr*parentGErrorC*derivC)/(bsm*br);
                linkWeight += (-lr*parentGErrorD*derivD)/(bsm*br);
                linkWeight += (-lr*parentGErrorE*derivE)/(bsm*br);
                linkWeight += (-lr*parentGErrorF*derivF)/(bsm*br);
                linkWeight += (-lr*parentGErrorG*derivG)/(bsm*br);
            }
            
            return [vec4(linkLayerNum, 0.0, linkWeight, linkTypeParent)];
            `];
    };
}
global.KERNEL_ADJMATRIX_UPDATE = KERNEL_ADJMATRIX_UPDATE;
module.exports.KERNEL_ADJMATRIX_UPDATE = KERNEL_ADJMATRIX_UPDATE;
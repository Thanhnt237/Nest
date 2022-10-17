export function transformArrayEntitiesToSerializer(metadata: Array<any>, classSerializer: any){
    return metadata.map(c => new classSerializer(c))
}
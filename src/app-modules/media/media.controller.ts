import {Controller, Post, UploadedFile, UseInterceptors} from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {endpoint} from "../../common/constants/endpoint";

@Controller(endpoint.media_prefix)
export class MediaController{
    @Post(endpoint.media_upload)
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File): Promise<any> {
        console.log(file)
        return
    }
}
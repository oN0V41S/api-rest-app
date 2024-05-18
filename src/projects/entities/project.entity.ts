// Gerador de chaves Aleatórias
import crypto from 'crypto';

// Importando Decorators
import { Column, Entity, PrimaryColumn } from "typeorm";

// Criando Tipo de Dados para var: "Status"
export enum ProjectStatus{
    Pending = 'pending',
    Active = 'active',
    Cancelled = 'cancelled',
    Completed = 'completed',
}

// Entidade de Projetos
@Entity()
export class Project {
    // Decorador de Chave Primária
    @PrimaryColumn()
    id: String;
    // Decorador para coluna
    @Column()
    name: String;
    @Column({nullable: true, type: 'datetime'})
    started_at: Date | null;
    @Column({nullable: true, type: 'datetime'})
    cancelled_at: Date | null;
    @Column({nullable: true, type: 'datetime'})
    forecasted_at: Date | null;
    // Decorator para Enum Data Type
    @Column({type: 'simple-enum'})
    status: ProjectStatus;

    construct(props: 
        {
            name: string;
            description: string,
            started_at?: Date | null;
            cancelled_at?: Date | null;
            forecasted_at?: Date | null;
        }, id?: string,
    ){
        Object.assign(this, props)
        this.id= id ?? crypto.randomUUID();
    }
}
